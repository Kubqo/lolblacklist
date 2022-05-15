import { Input, Flex, Button, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/api";
import { regions, regionsType } from "../types/enums";

const Search = () => {
  const [value, setValue] = useState("");
  const [region, setRegion] = useState(regionsType.EUNE);

  const navigate = useNavigate();

  const handleChangeRegion = (event: any) => {
    // console.log(event.target.value);
    setRegion(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const searchPlayer = async () => {
    const data = await getProfile(value, region);
    navigate("/profile", { state: data });
  };

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Flex>
        <Select value={region} onChange={handleChangeRegion} width={100}>
          {regions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.name}
            </option>
          ))}
        </Select>

        <Input
          placeholder="Search"
          w={300}
          onChange={handleChange}
          value={value}
        />
        <Button onClick={searchPlayer}>Find player</Button>
      </Flex>
    </Flex>
  );
};

export default Search;
