import { useState } from 'react';
import Responsive from 'Components/Responsive';
import CommentToggleButton from './CommentToggleButton';
import CommentList from './CommentList';
import profile from 'Assets/icon/profileImage.svg';

const temporalText = 'We can all agree that MAVERICK is one of their POWERFUL cb!!!!! This is us!';
const temporalComment = { commentCount: 415, thumbnail: profile, text: temporalText };

function CommentHandler(props) {
  const { isMobileCommentOpen, toggle } = props;
  return (
    <>
      <Responsive mobile>
        {!isMobileCommentOpen ? (
          <CommentToggleButton toggle={toggle} initComment={temporalComment} />
        ) : (
          <CommentList toggle={toggle} />
        )}
      </Responsive>
    </>
  );
}

export default CommentHandler;
