import { useState } from "react";
import { BsFillBookmarkFill, BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import PostContent from "../../../components/post/PostContent";
import WritorProfile from "../../../components/post/WritorProfile";
import CommentList from "../../../components/comment/CommentList";
import ProjectTeamMember from "./ProjectTeamMember";
import ProjectMethod from "./ProjectMethod";
import GoBack from "../../../components/GoBack";
import CommentInputBox from "../../../components/comment/CommentInputBox";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 800px;
  margin-bottom: 40px;
`;

const PostBox = styled.div`
  display: grid;
  width: 100%;
  max-width: 1280px;
  grid-template-columns: 1fr 5.1fr 1.7fr;
  grid-template-rows: repeat(4, auto);
  padding: 10px;
  background-color: var(--color-sub-2);
  border-radius: 20px;
  column-gap: 40px;
  grid-template-areas:
    "header header header"
    "writer content info"
    "writer content info"
    "writer comment info";
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 5.1fr 1fr;
    column-gap: 15px;
  }

`;

const ProfileContainer = styled.div`
  grid-area: writer;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  grid-area: content;
  align-items: start;
`;

const CommentContainer = styled.div`
  grid-area: comment;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1rem;
    color: var(--color-sub-1);
  }
`;

const ProjectInfoContainer = styled.div`
  grid-area: info;
`;

const Head = styled.div`
  display: inline-flex;
  margin-top: 40px;
  margin-bottom: 20px;
  grid-area: header;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  align-items: left;
  gap: 10px;
  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    border: none;
    height: 32px;
    text-align: center;
    border-radius: 10px;

    svg {
      width: 11px;
      height: 12px;
      fill: var(--color-sub-4);
    }
  }
`;

const BookMarkButton = styled.button`
  color: var(--color-sub-2);
  background-color: var(--color-sub-1);
  width: 88px;
  &.marked {
    color: var(--color-sub-1);
    background-color: var(--color-sub-2);
    svg {
      width: 13px;
      height: 12px;
      fill: var(--color-sub-1);
    }
  }
`;

const StateButton = styled.button`
  color: var(--color-sub-1);
  background-color: var(--color-sub-4);
  width: 97px;
`;

const TeamMatchingPost = () => {
  const [processState, setProcessState] = useState(true); //false = 모집완료
  const [bookMark, setBookMark] = useState(false);
  const [comments, setComments] = useState([
    {
      //profileImg: img,
      username: "user1",
      content: "예시 댓글 어쩌고 저쩌고",
      time: "2023.03.28 12:01",
      reply: [
        {
          //profileImg: img,
          username: "user1",
          content: "대댓글",
          time: "2023.03.28 12:05"
        }
      ]
    },
    {
      //profileImg: img,
      username: "user2",
      content: "예시 댓글 어쩌고 저쩌고2222",
      time: "2023.03.28 12:03",
      reply: [
        {
          //profileImg: img,
          username: "user1",
          content: "대댓글11",
          time: "2023.03.28 12:05"
        },
        {
          //profileImg: img,
          username: "user1",
          content: "대댓글22",
          time: "2023.03.28 12:05"
        }
      ]
    }
  ]);
  const handleClickBookMark = () => {
    setBookMark(!bookMark);
  };

  const writeComment = ( comment : string) => {
    let newComment = {
      //profileImg: img,
      username: "user1",
      content: comment,
      time: "2023.03.28 12:05",
      reply: []
    };
    setComments([...comments, newComment]);
  };

  return (
    <Wrapper>
      <PostBox>
        <Head>
          <GoBack />
        </Head>
        
          <ProfileContainer>
            <WritorProfile />
          </ProfileContainer>
     
            <ContentContainer>
              <PostContent />
            </ContentContainer>
            <CommentContainer>
              <>
                <p>댓글 {comments.length}개</p>
                <CommentInputBox writeComment={writeComment} />
                {comments.map((comment, idx) => (
                  <CommentList
                    key={idx}
                    username={comment.username}
                    content={comment.content}
                    time={comment.time}
                    reply={comment.reply}
                  />
                ))}
              </>
            </CommentContainer>
        
          <ProjectInfoContainer>
            <ButtonContainer>
              <StateButton>
                {processState ? "모집 진행중" : "모집 완료"}
              </StateButton>
              <BookMarkButton
                className={bookMark ? "marked" : ""}
                onClick={handleClickBookMark}
              >
                스크랩 {bookMark ? <BsCheckLg /> : <BsFillBookmarkFill />}
              </BookMarkButton>
            </ButtonContainer>

            <ProjectMethod />
            <ProjectTeamMember />
          </ProjectInfoContainer>
    
      </PostBox>
    </Wrapper>
  );
};

export default TeamMatchingPost;
