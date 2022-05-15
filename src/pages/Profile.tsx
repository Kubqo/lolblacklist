import { Flex, Image, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { getProfilePic } from "../api/data";
import { ProfileCoreStructure } from "../types/enums";

const Profile = () => {
  const location = useLocation();
  const state: ProfileCoreStructure = location.state as ProfileCoreStructure;

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Box border="1px solid white">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={getProfilePic(state.profileIconId)}
          alt={`${state.name}'s profile picture`}
        />
        <Flex flexDirection="column">
          <Box> {state.name}</Box>
          <Box> {state.summonerLevel}</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
`