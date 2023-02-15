import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Skeleton from '@mui/material/Skeleton';
import { Box } from "@mui/system";

export default function NFTCards(props: { address: string; }) {

  const address = props.address;
  const { contract } = useContract('0xE0c6b94761Ede753345E52157F3602112E40C75d');
  const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, address);

  return (
    <>
      {!isLoading && ownedNFTs
      ? ownedNFTs.map(nft =>
        <Box sx={{borderRadius:5}}>
        <ImageListItem >
          <img
            src={`${nft.metadata.image!}?w=400&fit=crop&auto=format`}
            srcSet={`${nft.metadata.image!}?w=400&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />

          <ImageListItemBar
            title={nft.metadata.name}
            subtitle={nft.metadata.description}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        </Box>)
      : (
        <div>
          <Skeleton variant="rectangular" height={500} />
        </div>
      )}
    </>
  );
}