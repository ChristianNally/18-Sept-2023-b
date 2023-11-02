import './App.css';
import PostListing from './components/PostListing';
import Posting from './components/Posting';
// import Posting from './components/Posting';

function App() {

  // stub DB with posting data
  const posts = [
    {
      title: "Full Stack React Developer 2",
      closing_date: "2024-01-01",
      description: "Write all the things and save the world!",
      link: "http://example.com/best-job-ever.html"
    },
    {
      title: "A.I. Prompt Engineer 2",
      closing_date: "2024-01-02",
      description: "Control our soon to be overlords and save the world!",
      link: "http://example.com/second-best-job-ever.html"
    },
  ];

  return (
    <div className="App">
      <h1>Job Application Manager</h1>
      <PostListing posts={posts}/>
      {/* <Posting 
        title="Title Goes Here"
        closing_date="2024-02-03"
        description="You know what to do!"
        link="http://example.com/the-real-job"
      /> */}
    </div>
  );
}

export default App;
