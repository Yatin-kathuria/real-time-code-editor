import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Created a new room');
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error('ROOM ID & Username is required');
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
      joinRoom();
    }
  };

  return (
    <div className='homePageWrapper' onKeyUp={handleInputEnter} tabIndex='0'>
      <div className='formWrapper'>
        <img
          className='homePageLogo'
          src='/code-sync.png'
          alt='code-sync-logo'
        />
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4>
        <div className='inputGroup'>
          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            name='room_id'
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className='btn joinBtn' onClick={joinRoom}>
            Join
          </button>
          <span className='createInfo'>
            If you don't have an invite then create &nbsp;
            <a href='' className='createNewBtn' onClick={createNewRoom}>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 &nbsp; by &nbsp;
          <a href='https://github.com/Yatin-kathuria'>Yatin Kathuria</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
