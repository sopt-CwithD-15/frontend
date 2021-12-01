import Responsive from 'Components/Responsive';
import CommentToggleButton from './CommentToggleButton';
import CommentList from './CommentList';
import profile from 'Assets/icon/profileImage.svg';

function CommentHandler(props) {
  const { isMobileCommentOpen, toggle, comments, vid } = props;

  return (
    <>
      <Responsive mobile>
        {!isMobileCommentOpen ? (
          <CommentToggleButton
            toggle={toggle}
            initComment={{
              commentCount: comments.length,
              thumbnail: profile,
              text: comments.length ? comments[0].content : '등록된 댓글이 없습니다.',
            }}
          />
        ) : (
          <CommentList toggle={toggle} comments={comments} vid={vid} />
        )}
      </Responsive>

      <Responsive tablet desktop>
        <CommentList toggle={toggle} comments={comments} vid={vid} />
      </Responsive>
    </>
  );
}

export default CommentHandler;
