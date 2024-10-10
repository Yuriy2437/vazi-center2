'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PageLayout from '../../components/PageLayout';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import styles from '../../styles/CommonPage.module.css';

const EnglishClubPage = () => {
  const isAdmin = useAdminStatus();

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Vazi English Club is happy to help you brush up on your English
        skills and take it to the level you’ve always dreamed of - all under the
        guidance of experienced teachers. Among them are both native speakers
        and bilinguals. In a cozy atmosphere, over a cup of coffee, we conduct
        1.5-hour classes on a whole variety of language-related topics and
        subjects - from Grammar to Phrasal verbs, from the Conditionals to
        Sequence of Tenses, from the Passive voice to Reported speech, from
        speaking to analyzing songs and movies.
      </p>
    </>
  );

  const rightContent = (
    <>
      <QuestionSection
        apiEndpoint='/api/english_club/questions'
        title='Questions about English Club'
        isAdmin={isAdmin}
      />
    </>
  );

  return (
    <PageLayout
      leftContent={leftContent}
      rightContent={rightContent}
      backgroundColor='#4caf50'
    />
  );
};

export default EnglishClubPage;
