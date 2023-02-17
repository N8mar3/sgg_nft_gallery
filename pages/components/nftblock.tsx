import ImageList from '@mui/material/ImageList';
import NFTCards from './nftcard';
import styles from "../styles/Home.module.css";

function NFTBlock(props: any) {

  const address: string = props.address
  const email: string = props.email
  
  
  const apiUrlEndpoint = "http://localhost:3000/api/sendWallet/";
  const postData = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      address: address,
      email: email
    })
  };

  if (address && email) {
    fetch(apiUrlEndpoint, postData);
  };
  
  return (
    <>
      <div className={styles.commonText}>
        <h2 style={{ fontSize: "0.9rem", color:"ffffff" }}>Connected: {address} {email}</h2>
        <p>
          If NFT does not show up, come back in 10 minutes
        </p>
      </div>
      <ImageList
        sx={{
          height: 550,
          boxShadow: "rgba(21, 21, 21, 0.4) -5px 5px,rgba(25, 25, 25, 0.2) -10px 10px",
          borderRadius:5
        }}
        cols={1}
      >
        <NFTCards address={address}/>
      </ImageList>
      
    </>
  )
}

export default NFTBlock;
