
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import { Container, InputWrapper, List, ListWrapper, Overlay, SearchContainer, SearchInput } from './Styles'
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../Shared/Constants';
import { ChangeEvent, useState } from 'react';

const Searchpage = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const data: string[] = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

  // Function to handle text change and filter data
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    setSearchText(inputValue);

    const filteredResults: string[] = data.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };
  return (
    <Container>
      <FaArrowLeft
        size={30}
        color="white"
        className="svg"
        onClick={() => history.push(ROUTES.HOME)}
      />
      <Overlay />
      <InputWrapper>
        <FaSearch size={30} color={"#fff"} />
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search for your favourite tutor..."
            value={searchText}
            onChange={handleInputChange}
          />
        </SearchContainer>
      </InputWrapper>
      {searchText.length>0 && filteredData.length >0 && <ListWrapper>
        {filteredData.map((item, index) => (
          <List key={index}>{item}</List>
        ))}
      </ListWrapper>}
    </Container>
  );
}

export default Searchpage
