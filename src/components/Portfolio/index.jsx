import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setNetlifySites} from '../../redux/actions/netlifySitesActions'

const NetlifySites = () => {
  const dispatch = useDispatch();
  const sites = useSelector((state) => state.portfolio.netlifySites);

  useEffect(() => {
    const fetchNetlifySites = async () => {
      try {
        const accessToken = 'nfp_dLtWGYNwYNTtxwBUju2C4FjuxCuYnBR5ed85';
        const response = await fetch('https://api.netlify.com/api/v1/sites', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Netlify sites');
        }

        const data = await response.json();
        dispatch(setNetlifySites(data));;
      } catch (error) {
        console.error(error);
      }
    };

    fetchNetlifySites();
  }, [dispatch]);

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {sites && sites.map((site) => (
          <li key={site.id}>
            <strong>Name:</strong> {site.name} <br />
            <strong>URL:</strong>{' '}
            <a href={site.admin_url} target="_blank" rel="noopener noreferrer">
              {site.admin_url}
            </a>{' '}
            <br />
            {site.screenshot_url && (
              <div>
                <img src={site.screenshot_url} alt={`${site.name} Screenshot`} />
              </div>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>


  );
};

export default NetlifySites;
