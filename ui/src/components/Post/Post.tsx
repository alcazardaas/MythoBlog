import { useNavigate } from 'react-router-dom';
import { IProps } from './IProps';
import { ImageContainer, Image, PostContainer, Title, Description, BodyContainer } from './styles';

const Post = ({ item }: IProps): JSX.Element => {
  const { title, body, image } = item;
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/post/${item.id}`);
  };

  return (
    <PostContainer onClick={handleClick} data-testid="post-test-id">
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>
      <BodyContainer>
        <Title>{title}</Title>
        <Description>{body}</Description>
      </BodyContainer>
    </PostContainer>
  );
};

export default Post;
