import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComment, faCalendar, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../..";
import { Spinner } from "../../../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../../../utils/formatter";

interface PostHeaderProps {
  isLoading: boolean;
  postData: IPost;
}


export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at);

  return (
    <PostHeaderContainer>
      {isLoading ? <Spinner /> : (
        <>
          <header>
            <ExternalLink as='button' onClick={goBack} variant="iconLeft" icon={<FontAwesomeIcon icon={faChevronLeft} />} text='Voltar' />
            <ExternalLink text='Ver no Github' href={postData.html_url} target='_blank' />
          </header>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
     
    </PostHeaderContainer>
  );
}