import { useState } from "react";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import NFTBlock from "./nftblock";
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import IconButton from '@mui/material/IconButton';
import styles from "../styles/Home.module.css";
import { styled } from '@mui/material/styles';
import Header from "./header";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import Typography from '@mui/material/Typography';

const ImgButton = styled(IconButton)(({ theme }) => ({
    boxShadow: "rgba(21, 21, 21, 0.4) -5px 5px,rgba(25, 25, 25, 0.2) -10px 10px",
    transform: "translate(10px, -10px)",
    backgroundColor:"000000",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionDuration: "200ms",
    ":hover": {
        transform: "translate(-2px, 1px)",
        boxShadow: "rgba(21, 21, 21, 0.4) -0px 0px,rgba(25, 25, 25, 0.2) 0px 0px"
    }
  }));


function MiddleBlock() {

    const address = useAddress(); // Hook to grab the currently connected user's address.
    const connectWithMagic = useMagic(); // Hook to connect with Magic Link.  
    const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
    const [email, setEmail] = useState<string>(""); // State to hold the email address the user entered.
  
    return (
        <>
        {address ? (
            <>
                <NFTBlock address={address} email={email}/>
                <Box
                    sx={{ width: '100%', maxWidth: 600, marginTop: 10 }}>
                    <Stack
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                    >
                        <Typography variant="h5" gutterBottom>
                            Logout
                        </Typography>
                        <ImgButton
                            onClick={() => disconnectWallet()}
                        >
                            <LogoutTwoToneIcon/>
                        </ImgButton>    
                    </Stack>
                </Box>
            </>
        ) : (
            <Box sx={{marginTop:20}}>
                <Header/>
                <Stack 
                    direction="row"
                    style={{
                        marginTop: 10,
                        maxWidth: "90vw",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        gap: 16,
                    }}
                >
                    <input
                        type="email"
                        placeholder="Login to see Your NFT's"
                        className={styles.textInput}
                        style={{ width: "90%", marginBottom: 0 }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {email
                    ?
                    <ImgButton
                        onClick={() => {
                            connectWithMagic({ email });
                        }}
                        >
                            <LockOpenTwoToneIcon sx={{fontSize:'45px'}}/>
                    </ImgButton>
                    :
                    <ImgButton
                        onClick={() => {
                            connectWithMagic({ email });
                        }}
                        disabled
                    >
                        <LockOpenTwoToneIcon sx={{fontSize:'45px'}}/>
                    </ImgButton>
                    }
                </Stack>
            </Box>
        )}
        </>
    )
}

export default MiddleBlock;
