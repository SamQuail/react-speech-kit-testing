import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {  useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = () => {
    const [audio, setAudio] = useState<string>("")
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState<number | undefined>(1);
    const [voiceIndex, setVoiceIndex] = useState(1);
    const { speak, speaking, cancel, voices, supported} = useSpeechSynthesis({
      onEnd: () => {
        console.log('Speech finished!');
      }
    });
    const voice = voices[voiceIndex] || null;

    return (
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between gap-5">
                    <TextField
          id="filled-textarea"
          label="Enter text to hear"
          placeholder="Enter text"
          rows={10}
          multiline
          variant="filled"
          fullWidth
          sx={{width: "25rem"}}
          onChange={(e) => setAudio(e.target.value)}
        />
            <Card sx={{width: "25rem"}} className="flex flex-col justify-center text-9xl">
      <CardContent>

        <Typography variant="h5" component="div">
            <Button sx={{fontSize: "2rem"}} onClick={() => {speak({text: audio, pitch: pitch, rate: rate, voice: voice})}}> Listen 🔊</Button>
        </Typography>
 

      </CardContent>
    </Card>

        </div>
            <Card  className="flex flex-col justify-center text-9xl">
            <CardContent>
      
            <Typography gutterBottom sx={{ color: 'text.primary', fontSize: "1.5rem", textAlign: "center" }}>
         Settings
        </Typography>
        <div className="flex flex-col  ">
          <Button fullWidth variant="contained" onClick={() => {cancel()}}>
            Cancel
          </Button>
          <Typography gutterBottom sx={{ color: 'text.primary', fontSize: "1rem", textAlign: "center" }} >
         Pitch
        </Typography>
          <Slider
  aria-label="Temperature"
  defaultValue={1}
  valueLabelDisplay="auto"

  step={0.1}
  marks
  min={0}
  max={2}
  onChange={(e,newValue) => {
    setPitch(Array.isArray(newValue) ? newValue[0] : newValue)
  }}
/>
          <Typography gutterBottom sx={{ color: 'text.primary', fontSize: "1rem", textAlign: "center" }}>
         Rate
        </Typography>
        <Slider
  aria-label="Temperature"
  defaultValue={1}
  valueLabelDisplay="auto"
  onChange={(e, newValue) => {
    setRate(Array.isArray(newValue) ? newValue[0] : newValue )
  }}

  step={0.1}
  marks
  min={0.5}
  max={2}
/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Change voice</InputLabel>
<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={voiceIndex}
    name="Change voice"
    label="Change voice"
    onChange={(e, newValue) => {
      setVoiceIndex(e.target.value as number)
      console.log(newValue)
    }}
    fullWidth
  >
  {voices.map((option, index) => (

  <MenuItem value={index} key={index}>{`${option.lang} - ${option.name}`} </MenuItem>
              ))}
    
  </Select>
  </FormControl>

        </div>
       
      
            </CardContent>
            
          </Card>
          is speaking: {speaking ? "true" : "false"}
          <br />
          is supported: {supported ? "true" : "false"}
          
          </div>
    )
}

export default TextToSpeech;