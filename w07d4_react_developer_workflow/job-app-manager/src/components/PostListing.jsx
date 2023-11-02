import './PostListing.css';
import Posting from './Posting';

function PostListing(props) {

  console.log('props', props);

  return (
    <ul>
      { props.posts.map((item)=>{
        return (
          <li>
            <Posting 
              title={item.title}
              closing_date={item.closing_date}
              description={item.description}
              link={item.link}
            />
          </li>
        );
      }) }
    </ul>
  );

}

export default PostListing;

PostListing.defaultProps = {
  posts: [
    {
      title: "Full Stack React Developer",
      closing_date: "2024-01-01",
      description: "Write all the things and save the world!",
      link: "http://example.com/best-job-ever.html"
    },
    {
      title: "A.I. Prompt Engineer",
      closing_date: "2024-01-02",
      description: "Control our soon to be overlords and save the world!",
      link: "http://example.com/second-best-job-ever.html"
    },
  ],
};