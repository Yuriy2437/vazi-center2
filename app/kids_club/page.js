'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PageLayout from '../../components/PageLayout';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import styles from '../../styles/CommonPage.module.css';

const KidsClubPage = () => {
  const isAdmin = useAdminStatus();

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Vazi Kids Club serves two key purposes. First, during events, you
        can leave your child in the care of a responsible adult in the children
        room. Second, we offer specialized programs for behavioral therapy or
        speech therapy, where certified professionals work with your child to
        support their development.
      </p>
    </>
  );

  const rightContent = (
    <>
      <QuestionSection
        apiEndpoint='/api/kids_club/questions'
        title='Questions about Kids Club'
        isAdmin={isAdmin}
      />
    </>
  );

  return (
    <PageLayout
      leftContent={leftContent}
      rightContent={rightContent}
      backgroundColor='#cc00ad'
    />
  );
};

export default KidsClubPage;
