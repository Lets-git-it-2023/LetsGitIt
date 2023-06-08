import { useState } from "react";
import { BsFillBookmarkFill, BsCheckLg } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import styled from "styled-components";

import GoBack from "../../components/GoBack";
import ProjectInfo from "./ProjectInfo";
import ProjectTeam from "./ProjectTeam";
import PostInfo from "../../components/post/PostInfo";
import ReviewContainer from "./ReviewContainer";
import CommentInputBox from "../../components/comment/CommentInputBox";
import CommentList from "../../components/comment/CommentList"; 

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
    "list content info"
    "list content info"
    "list comment info";
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 5.1fr 1fr;
    column-gap: 10px;
  }
`;
const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  grid-area: list;
  flex: 1;
  padding: 0 20px 0 20px;
  color: var(--color-sub-1);
  font-weight: 450;
  span{
      margin-bottom: 10px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  padding: 0 20px 0 20px;
  align-items: start;
  color: var(--color-sub-1);
  h3{
      margin: 0px;
      font-size: 32px;
    font-weight: 500;
  }
`;

const PostInfoContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 30px;
`

const CommentContainer = styled.div`
  padding: 0 20px;
  grid-area: comment;
  margin-bottom: 40px;
  p {
    font-size: 1rem;
    color: var(--color-sub-1);
  }
`;

const ProjectInfoContainer = styled.div`
  width: 100%;
  grid-area: info;
`;

const Head = styled.div`
  display: inline-flex;
  grid-area: header;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  align-items: left;
  flex-wrap: wrap;
  gap: 10px;
  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    border: none;
    height: 32px;
    text-align: center;
    border-radius: 10px;
    
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
  svg {
      path
      {
        width: 13px;
        height: 12px;
      }
      
    }
`;

const ReviewPost = () => {
  const [isWritten, setIsWritten] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [positions, setPositions] = useState(["IOS", "안드로이드", "서버"]);
  const [title, setTitle] = useState("스마트팜교육 chatGPT 챗봇");
  const [date, setDate] = useState("2023.04.12");
  const [comments, setComments] = useState([
    {
      //profileImg: img,
      username: "user1",
      content: "예시 댓글 어쩌고 저쩌고",
      time: "2023.03.28 12:01",
      reply: [{
        //profileImg: img,
        username: "user1",
        content: "대댓글",
        time: "2023.03.28 12:05"
      },]
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
          },
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
        
          <PositionList>
            {positions.map((item)=>(
                <span>{item}</span>
            ))}
          </PositionList>
   

            <ContentContainer>
              <h3>{title}</h3>
              <PostInfoContainer>
                <span>작성일 {date}</span>
              <PostInfo />
              </PostInfoContainer>
               <ReviewContainer type="" username = "user1" PostionName="IOS" content="contentsd"/>
               <ReviewContainer type="write" username = "user1" PostionName="IOS" content="contentsd"/>
            </ContentContainer>

            <CommentContainer>
              <p>댓글 {comments.length}개</p>
              <CommentInputBox writeComment={writeComment}/>
              {
                comments.map((comment, idx) => (
                  <CommentList
                    key={idx}
                    username={comment.username} 
                    content={comment.content} 
                    time={comment.time} 
                    reply={comment.reply}
                  />
                ))
              }
            </CommentContainer>

          <ProjectInfoContainer>
            <ButtonContainer>
              {isWritten ? 
              <StateButton>
                작성 완료 <BsCheckLg />
              </StateButton> :
              <StateButton>
              작성하기 <MdModeEdit />
            </StateButton> 
              }
              <BookMarkButton
                className={bookMark ? "marked" : ""}
                onClick={handleClickBookMark}
              >
                스크랩 {bookMark ? <BsCheckLg /> : <BsFillBookmarkFill />}
              </BookMarkButton>
            </ButtonContainer>
            <ProjectInfo />
            <ProjectTeam/>
          </ProjectInfoContainer>
      </PostBox>
    </Wrapper>
  );
};

export default ReviewPost;
