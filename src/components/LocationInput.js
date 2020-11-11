import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Downshift from 'downshift';
import { Div } from 'glamorous';
import {
    Menu,
    ControllerButton,
    Input,
    Item,
    XIcon
  } from './DowshiftItems';
import {locationsRequest} from '../config/config';

function LocationInput() {
    let history = useHistory();

    const [locations, setLocations] = useState(locationsRequest());

    function handleSubmit(e) {
        console.log('pressed');
        if(e.key === 'Enter'){
          history.push(`/search?location=${e.target.value}`)
        }
      }

    return (
        <Downshift>
            {({
                getLabelProps,
                getInputProps,
                getMenuProps,
                getButtonProps,
                getItems,
                inputValue,
                getItemProps,
                selectedItem,
                itemToString,
                highlightedIndex,
                clearSelection,
                isOpen
            }) => (
                <div>
                    <Div position="relative" css={{ paddingRight: '1.75em' }}>
                        <Input
                            onKeyPress={(e) => handleSubmit(e)}
                            {...getInputProps({
                                isOpen,
                                placeholder: 'Where do you want to live?'
                            })}
                        />
                        {selectedItem
                            ? <ControllerButton
                                css={{ paddingTop: 4 }}
                                onClick={clearSelection}
                                aria-label="clear selection"
                                >
                                <XIcon />
                                </ControllerButton>
                            : null
                        }
                    </Div>
                    {!isOpen
                        ? null
                        : <Menu>
                            {locations.map((item, index) =>
                                <Item
                                    key={item.id}
                                    {...getItemProps({
                                        item: item.name,
                                        index,
                                        isActive: highlightedIndex === index,
                                        isSelected: selectedItem === item
                                    })}
                                >
                                    {item.name}
                                </Item>
                                )}
                        </Menu>
                    }
                </div>
            )}
        </Downshift>
    );
}

export default LocationInput;