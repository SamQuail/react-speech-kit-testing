import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSpeechRecognition } from 'react-speech-kit';


const SpeechToText = () => {
    const [value, setValue] = useState<SpeechRecognitionResult>();
    const [lang, setLang] = useState('en-AU');

    const languageOptions = [
        { label: 'Cambodian', value: 'km-KH' },
        { label: 'Deutsch', value: 'de-DE' },
        { label: 'English', value: 'en-AU' },
        { label: 'Farsi', value: 'fa-IR' },
        { label: 'Français', value: 'fr-FR' },
        { label: 'Italiano', value: 'it-IT' },
        { label: '普通话 (中国大陆) - Mandarin', value: 'zh' },
        { label: 'Portuguese', value: 'pt-BR' },
        { label: 'Español', value: 'es-MX' },
        { label: 'Svenska - Swedish', value: 'sv-SE' },
      ];

    const onEnd = () => {
        console.log("finished")
      };
    
      const onResult = (result: SpeechRecognitionResult) => {
        setValue(result);
      };
    

      const onError = (event: ErrorEvent) => {
        console.log(event)
      };
    
      const { listen, listening, stop, supported } = useSpeechRecognition({
        onResult,
        onEnd,
        onError,
      });
    


    return (
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between gap-5  ">
            
 
            <Card sx={{width: "25rem"}} className="flex flex-col justify-center text-9xl">
      <CardContent>

        <Typography variant="h5" component="div">
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn't support Speech
            Recognition. 😭
          </p>
        )}
            <Button sx={{fontSize: "2rem"}} onClick={() => {listen({ lang })}}> Listen 🔊</Button>
        </Typography>
 

      </CardContent>
    </Card>

                    <TextField
          id="filled-textarea"
          placeholder="Enter text"
          rows={10}
          multiline
          variant="filled"
          fullWidth
          sx={{width: "25rem"}}
          disabled
          value={value}
        
        />


        </div>
            <Card  className="flex flex-col justify-center text-9xl">
            <CardContent>
      
            <Typography gutterBottom sx={{ color: 'text.primary', fontSize: "1.5rem", textAlign: "center" }}>
         Settings
        </Typography>
        <div className="flex flex-col gap-5  ">
          <Button fullWidth variant="contained" onClick={() => {stop()}}>
            Stop
          </Button>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Change language</InputLabel>
<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={lang}
    name="Change language"
    label="Change language"
    onChange={(e) => {
        setLang(e.target.value)
    }}
    fullWidth
  >
  {languageOptions.map((option, index) => (

  <MenuItem value={index} key={index}>{`${option.label} - ${option.value}`} </MenuItem>
              ))}
    
  </Select>
  </FormControl>

        </div>
       
      
            </CardContent>
            
          </Card>
          is listening: {listening ? "true" : "false"}
          <br />
          is supported: {supported ? "true" : "false"}
          
          </div>
    )
}

export default SpeechToText;