import { useState } from 'react'
import { useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'
import sampleDarkTheme from './theme.jsx'; 
import SuprSendInbox from '@suprsend/react-inbox'

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // needed for toast notifications, can be ignored if hideToast=true


//32d0c950
const API_URL = 'https://www.omdbapi.com?apikey=32d0c950'

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const searchMovies = async (title) => {
    const response =  await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('batman');

  },[]);

return (
  <div className="app">
    <SuprSendInbox
      workspaceKey= "OJYrli1GH1Sc8lGbY8Ir"
      subscriberId= "SS.wXzphs2KAKNowXY2jjxwKMlKVhs6FkmSON81LmZm1LQ"
      distinctId= "SS._ilTszOMtCM2jr75xUaJxHzHetDjyvoqltxWePYVBEQ"
      themeType="dark"
      
      // IF CUSTOM DESIGN IS NEEDED:
      // bellComponent={() => <p>MyBell</p>}
      // badgeComponent={(count) => <p>{count}</p>}
      // tabBadgeComponent={({ count }) =>  <p>{count}</p>}

      // notificationComponent={({ notificationData }) => (
      //   <p>{JSON.stringify(notificationData)}</p>
      // )}

      // notificationClickHandler={(notificationData) => {
      //   console.log('notification clicked', notificationData)
      // }}
      // noNotificationsComponent={() => <p>No Notifications</p>}

      
      theme={{
        bell: { color: 'white' },
        badge: { backgroundColor: 'pink', color: 'black', margin: '0px' },
        //header
        header: {
          container: { backgroundColor: 'grey' },
          headertext: { color: '#333333' },
          markAllReadText: { color: 'red' },
        },
        tabs: {
          color: 'red',
          unselectedColor: 'gray',
          bottomColor: 'red',
          badgeColor: 'red',
          badgeText: 'red',
        },

        notification: {
          container: {
            readBackgroundColor: 'gray',
            unreadBackgroundColor: 'gray',
            hoverBackgroundColor: 'gray',

          },
          headerText: { color: '#333333' },
          bodyText: { color: '#333333',blockquoteColor: 'red',linkColor: 'red' },
          unseenDot: { backgroundColor: 'gray' },
          subtext: { color: 'red' },
          actions: [
            //primary button
            { container: { backgroundColor: 'red' , hoverBackgroundColor: 'red' },text: { color: 'yellow' }},

            // Secondary button text
            { container: { backgroundColor: 'red' , hoverBackgroundColor: 'red' },text: { color: 'yellow' }},
  
            
          ],
          
          expiresText: {
            backgroundColor: 'red',
            color: 'red',
            expiringBackgroundColor: 'darkred',
            expiringColor: 'darkred',
          },
          pinnedText: { color: 'red' },
          pinnedIcon: { color: 'red' },

          actionsMenuIcon: { color: 'red' },
          // hoverBackgroundColor: { color: 'red' },
          actionsMenu: {
            backgroundColor: 'red',
            borderColor: 'red',
          },
          actionsMenuItem: {
            hoverBackgroundColor: 'red',
          },
          actionsMenuItemIcon: { color: 'red'},
          actionsMenuItemText: { color: 'red' },
        },

        toast: {
          container: { backgroundColor: 'white' },
          headerText: { color: '#333333' },
          bodyText: { color: '#333333', blockquoteColor: '#333333', linkColor: '#333333' },
        },
        notificationsContainer: {
          noNotificationsText: { backgroundColor: '', color: 'white' },
          noNotificationsSubtext: { backgroundColor: '', color: 'white' }
        }
      }}

      popperPosition="bottom" // default is bottom-right
      toastProps={{
        position: 'bottom-right',
        duration: 3000, // 3 seconds
        limit: 3,
        toastComponent: ({ notificationData }) => <p>New Notification: {notificationData.title}</p>
      }}
       // hideToast={true}
      // hideAvatar={false}

    />





    <h1>Movies Now</h1>
    <br></br>
    <div className="search">
      <input
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src = {searchIcon}
        alt= "search"
        onClick = {() => searchMovies(searchTerm)}
      />

    </div>
    {movies?.length > 0
      ? (
        <div className = "container">
        {movies.map((movie) => (
          <MovieCard movie = {movie}/>
        ))}     
      </div>
      ) :(
        <div className='empty'>
          <h2>No Movies found!</h2>
        </div>
      )}
    <br></br>
    <div className = "container">
      <MovieCard movie = {movie1} />      
    </div>

  </div>
  )
}

export default App;
