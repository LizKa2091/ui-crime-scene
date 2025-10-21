import { type FC, type ReactNode } from 'react';

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

   const errorData = errors.find((err) => err.id === errorId);
   const errDesc = errorData?.description || '';

   const handleHintClick = () => {
      const isNewError = !foundErrors.includes(errorId);

      dispatch(markFoundError(errorId));

      if (isNewError && errDesc) {
         dispatch(showModal({ activeModal: 'hint', modalData: errDesc }));
      }
   }

   return (
      <div onClick={handleHintClick} className={styles.hintContainer}>
         {children}
      </div>
   )
}

export default CrimeHint;