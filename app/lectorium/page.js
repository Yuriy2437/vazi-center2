'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PageLayout from '../../components/PageLayout';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import styles from '../../styles/CommonPage.module.css';

const LectoriumPage = () => {
  const isAdmin = useAdminStatus();

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Lecture Hall (or the Educational Center) at Vazi is another key
        attraction, hosting certified lecturers across a wide range of
        disciplines, including philosophy, theology, history, political science,
        the humanities, family relationships, and natural sciences. Each lecture
        is tailored to meet the specific needs of the audience, fostering a
        discussion-oriented environment. The primary goal of these sessions is
        to promote the intellectual growth and development of participants.
      </p>
    </>
  );

  const rightContent = (
    <>
      <QuestionSection
        apiEndpoint='/api/lectorium/questions'
        title='Questions about Lectorium'
        isAdmin={isAdmin}
      />
    </>
  );

  return (
    <PageLayout
      leftContent={leftContent}
      rightContent={rightContent}
      backgroundColor='#1836e3'
    />
  );
};

export default LectoriumPage;
