'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PageLayout from '../../components/PageLayout';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import PhotoGallery from '../../components/PhotoGallery';
import PhotoButtons from '../../components/PhotoButtons';
import styles from '../../styles/CommonPage.module.css';

const KidsClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const isAdmin = useAdminStatus();

  const photos = [
    '/images/photo_2.jpg',
    '/images/photo_7.jpg',
    '/images/photo_23.jpg',
  ];

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Vazi Kids Club serves two key purposes. First, during events, you
        can leave your child in the care of a responsible adult in the children
        room. Second, we offer specialized programs for behavioral therapy or
        speech therapy, where certified professionals work with your child to
        support their development.
      </p>
      <PhotoButtons setShowPhoto={setShowPhoto} />
    </>
  );

  const rightContent = (
    <>
      {showPhoto && <PhotoGallery photos={photos} />}
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
