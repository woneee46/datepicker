import {useState} from 'react';
import {IconButton, InputAdornment, TextField, type TextFieldProps} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

type ClearableTextFieldProps = TextFieldProps & {
  displayButton?: 'input' | 'hover' ;
}

function ClearableTextField({displayButton = 'input', ...restProps}: ClearableTextFieldProps) {
  const [value, setValue] = useState('');
  const [hovered, setHovered] = useState(false);

  const shouldShowClearButton = () => {
    if (displayButton === 'input') return !!value;
    if (displayButton === 'hover') return hovered;
    return false;
  };

  const eventHandlerProps:Partial<TextFieldProps> = {};

  if (displayButton === 'hover') {
    eventHandlerProps.onMouseEnter = () => setHovered(true);
    eventHandlerProps.onMouseLeave = () => setHovered(false);
  }

  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end" style={{visibility: !!value && shouldShowClearButton() ? 'visible' : 'hidden'}}>
              <IconButton  edge="end" onClick={() => setValue('')} >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...eventHandlerProps}
      {...restProps}
    />
  );
}

export default ClearableTextField;
