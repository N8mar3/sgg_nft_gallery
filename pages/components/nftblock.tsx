import ImageList from '@mui/material/ImageList';
import NFTCards from './nftcard';

function NFTBlock(props: any) {

  const address: string = props.address
  const email: string = props.email
  //const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
  
  const apiUrlEndpoint = "https://sgg-nft-gallery.vercel.app/api/hello";
  const postData = {
    method: "Post",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      address: address,
      email: email
    })
  };
  
  fetch(apiUrlEndpoint, postData);

  return (
    <>
      <h2 style={{ fontSize: "0.9rem" }}>Connected: {address}</h2>
      <p>
        If NFT does not show up, come back in 10 minutes
      </p>

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
