import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInstagramPhotos } from '../../redux/actions/instagramPhotosActions';

const InstagramPhotos = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.instagram.instagramPhotos);

  const accessToken = 'IGQWRQdE5YSkpuOUYtTDJfM2hIaGFqVkZAVSzF3ZA2JCenNwQTdIM0NFbHk5LWtNbXh1YVVFM0YyMXVFdUpQM09fUWlQQTBQMUJHMTBIdFhFM2hWSUZAwMlM0bENGX2JDTExhTndfbXZAXdXpiWmhjUUNONU12WHdpb0UZD';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const imagePhotos = data.data.filter(photo => photo.media_type === 'IMAGE');
        dispatch(setInstagramPhotos(imagePhotos));
      } catch (error) {
        console.error('Error fetching Instagram photos:', error);
      }
    };

    fetchData();
  }, [dispatch, accessToken]);

  return (
    <div className='gallery'>
      <h1 className='photos'>Gallery</h1>
      <ul className='ul'>
        {photos.map(photo => (
          <li className='li' key={photo.id}>
            <img src={photo.media_url} alt={photo.caption} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstagramPhotos;
