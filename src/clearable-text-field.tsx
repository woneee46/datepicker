import React, { useState } from 'react';
import { TextField, type TextFieldProps, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

type ClearableTextFieldProps = TextFieldProps & {
  buttonDisplay?: 'always' | 'hover' | 'focus' | 'input';
  showButtonAfterInput?: boolean;
}

function ClearableTextField({buttonDisplay = 'input', showButtonAfterInput = true, ...restProps}: ClearableTextFieldProps) {
  const [value, setValue] = useState('');
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const shouldShowClearButton = () => {
    if (buttonDisplay === 'always') return true;
    if (buttonDisplay === 'input') return !!value;
    if (buttonDisplay === 'hover') return hovered;
    if (buttonDisplay === 'focus') return focused;
    return false;
  };

  const eventHandlerProps:Partial<TextFieldProps> = {};

  if (buttonDisplay === 'focus') {
    eventHandlerProps.onFocus = () => setFocused(true);
    eventHandlerProps.onBlur = () => setFocused(false);
  }
  if (buttonDisplay === 'hover') {
    eventHandlerProps.onMouseEnter = () => setHovered(true);
    eventHandlerProps.onMouseLeave = () => setHovered(false);
  }

  const handleMouseDownClearButton: React.MouseEventHandler<HTMLButtonElement> | undefined =
    buttonDisplay === 'focus' ? (e) => e.preventDefault() : undefined;

  const visible = showButtonAfterInput ? (value && shouldShowClearButton()) : shouldShowClearButton();

  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end" style={{visibility: visible ? 'visible' : 'hidden'}}> 
              <IconButton  edge="end" onClick={() => setValue('')} onMouseDown={handleMouseDownClearButton}>
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
