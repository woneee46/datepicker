import React, { useState } from 'react';
import { TextField, type TextFieldProps, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

type ClearableTextFieldProps = TextFieldProps & {
  clearButtonDisplay?: 'always' | 'hover' | 'focus' | 'input' | 'never';
}

function ClearableTextField({clearButtonDisplay = 'input', ...restProps}: ClearableTextFieldProps) {
  const [value, setValue] = useState('');
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const shouldShowClearButton = () => {
    if (clearButtonDisplay === 'never') return false;
    if (clearButtonDisplay === 'always') return true;
    if (clearButtonDisplay === 'input') return !!value;
    if (clearButtonDisplay === 'hover') return hovered;
    if (clearButtonDisplay === 'focus') return focused;
    return false;
  };

  const eventHandlerProps:Partial<TextFieldProps> = {};

  if (clearButtonDisplay === 'focus') {
    eventHandlerProps.onFocus = () => setFocused(true);
    eventHandlerProps.onBlur = () => setFocused(false);
  }
  if (clearButtonDisplay === 'hover') {
    eventHandlerProps.onMouseEnter = () => setHovered(true);
    eventHandlerProps.onMouseLeave = () => setHovered(false);
  }

  const handleClear = () => setValue('');
  const handleMouseDownClearButton: React.MouseEventHandler<HTMLButtonElement> | undefined =
    clearButtonDisplay === 'focus' ? (e) => e.preventDefault() : undefined;

  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end" style={{visibility: shouldShowClearButton() ? 'visible' : 'hidden'}}>
              <IconButton  edge="end" onClick={handleClear} onMouseDown={handleMouseDownClearButton}>
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
