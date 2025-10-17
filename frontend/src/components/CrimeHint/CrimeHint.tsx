import { type FC, type ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { markFoundError } from '../../store/crimeSlice';
import { showModal } from '../../store/modalSlice';
import { useAppSelector } from '../../store/store';

import styles from './CrimeHint.module.scss';

interface ICrimeHintProps {
   errorId: number;
   description: string;
   children: ReactNode;
}

const CrimeHint: FC<ICrimeHintProps> = ({ errorId, description, children }) => {
   const dispatch = useDispatch();
   const foundErrors = useAppSelector((state) => state.crime.foundErrors);

   const handleHintClick = () => {
      const isNewError = !foundErrors.includes(errorId);
      dispatch(markFoundError(errorId));

      if (isNewError) {
         dispatch(showModal({ activeModal: 'hint', modalData: description }));
      }
   }

   return (
      <div onClick={handleHintClick} className={styles.hintContainer}>
         {children}
      </div>
   )
}

export default CrimeHint;