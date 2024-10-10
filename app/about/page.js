'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PageLayout from '../../components/PageLayout';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import styles from '../../styles/CommonPage.module.css';

const AboutPage = () => {
  const isAdmin = useAdminStatus();

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Vazi Center is a multi-functional developing cultural space in
        Tbilisi. Here you can watch movies, hear lectures, attend cultural and
        music events, and even get a consultation by a professional
        psychologist. If you have children, we have a playroom carefully watched
        by an adult. You are also welcome to enjoy a complementary cup of coffee
        or tea while here.
      </p>     
    </>
  );

  const rightContent = (
    <>
      <QuestionSection
        apiEndpoint='/api/about/questions'
        title='Questions about Vazi Center'
        isAdmin={isAdmin}
      />
    </>
  );

  return (
    <PageLayout
      leftContent={leftContent}
      rightContent={rightContent}
      backgroundColor='#d331c3'
    />
  );
};

export default AboutPage;
