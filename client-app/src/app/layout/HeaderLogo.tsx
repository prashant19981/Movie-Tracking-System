import { HeaderContent, Header, Icon, Segment } from 'semantic-ui-react'
import SearchBox from '../../features/movies/SearchBox';

const HeaderLogo = () => {

  return (
    <>
      <Segment inverted color='yellow'>

        <Header as='h2' icon textAlign='center'>
          <Icon name='video camera' circular />
          <HeaderContent>Movie Tracking System</HeaderContent>
        </Header>

        <SearchBox />

      </Segment>
    </>
  );
}


export default HeaderLogo;
