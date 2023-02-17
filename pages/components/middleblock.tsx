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
import Button from '@mui/material/Button';

const ImgButton = styled(IconButton)(({ theme }) => ({
    color:"#d1be9c",
    transitionProperty: " color, fill, stroke, opacity, box-shadow, transform",
    transitionDuration: "200ms",
    ":hover": {
        transform: "translate(-2px, 1px)",
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
                        <Button
                            onClick={() => disconnectWallet()}
                            endIcon={<LogoutTwoToneIcon/>}
                        >
                            Logout
                        </Button>    
                    </Stack>
                </Box>
            </>
        ) : (
            <div>
                <Header/>
                <Box sx={{marginTop:20}}>
                    
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
                            placeholder="Inter Email to see Your NFT's"
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
                                <LockOpenTwoToneIcon sx={{fontSize:'55px'}}/>
                        </ImgButton>
                        :
                        <ImgButton
                            onClick={() => {
                                connectWithMagic({ email });
                            }}
                            disabled
                        >
                            <LockOpenTwoToneIcon sx={{fontSize:'55px'}}/>
                        </ImgButton>
                        }
                    </Stack>
                </Box>
            </div>
        )}
        </>
    )
}

export default MiddleBlock;
