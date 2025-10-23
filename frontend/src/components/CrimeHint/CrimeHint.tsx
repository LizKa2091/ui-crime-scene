import { useState, type FC, type ReactNode } from 'react';

import { markFoundError } from '../../store/crimeSlice';
import { showModal } from '../../store/modalSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

import styles from './CrimeHint.module.scss';

interface ICrimeHintProps {
   errorId: number;
   children: ReactNode;
}

const CrimeHint: FC<ICrimeHintProps> = ({ errorId, children }) => {
   const dispatch = useAppDispatch();
   const { errors, foundErrors } = useAppSelector((state) => state.crime);

   const [_clickCounter, setClickCounter] = useState<number>(0);

   const errorData = errors.find((err) => err.id === errorId);
   const errDesc = errorData?.description || '';

   const handleHintClick = () => {
      setClickCounter((prev) => {
         const newCount = prev+1;
         
         if (newCount >= 3) {
            const isNewError = !foundErrors.includes(errorId);

            if (isNewError && errDesc) {
               dispatch(markFoundError({ errorId }));
               dispatch(showModal({ activeModal: 'hint', modalData: errDesc }));
            }

            return 0;
         }
         return newCount;
      });
   }

   return (
      <div onClick={handleHintClick} className={styles.hintContainer}>
         {children}
      </div>
   )
}

export default CrimeHint;