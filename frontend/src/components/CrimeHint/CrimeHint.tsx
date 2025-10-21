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

   const [clickCounter, setClickCounter] = useState<number>(0);

   const errorData = errors.find((err) => err.id === errorId);
   const errDesc = errorData?.description || '';

   const handleHintClick = () => {
      const isNewError = !foundErrors.includes(errorId);
      setClickCounter((prev) => prev+1);

      if (clickCounter >= 2) {
         setClickCounter(0);

         if (isNewError && errDesc) {
            dispatch(markFoundError(errorId));

            dispatch(showModal({ activeModal: 'hint', modalData: errDesc }));
         }
      }
   }

   return (
      <div onClick={handleHintClick} className={styles.hintContainer}>
         {children}
      </div>
   )
}

export default CrimeHint;