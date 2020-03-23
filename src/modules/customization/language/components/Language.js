import React, { useState } from 'react'
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

//Action de redux 
import { setLanguageAction } from '../store/LanguageAction';
import { updateLanguage } from '../../provider/CustomizationProvider';
import { messagesSpanish, messagesEnglish, messagesPortuguese } from '../messages';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      maxWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const Language = () => {
    const classes = useStyles();
    const currentLanguage = useSelector(state => state.language.language); 
    const messages = useSelector(state => state.language.messages); 
    const [language, setLanguage] = useState(currentLanguage);

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    const changeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        switch (selectedLanguage) {
            case "es":
                let languageES = {
                    language: selectedLanguage,
                    messages: messagesSpanish
                }
                dispatch(setLanguageAction(selectedLanguage, messagesSpanish));
                localStorage.setItem('language', JSON.stringify(languageES))
                updateLanguage(selectedLanguage);
                break;
            case "en":
                let languageEN = {
                    language: selectedLanguage,
                    messages: messagesEnglish
                }
                dispatch(setLanguageAction(selectedLanguage, messagesEnglish));
                localStorage.setItem('language', JSON.stringify(languageEN))
                updateLanguage(selectedLanguage);
                break;
            case "pt":
                let languagePT = {
                    language: selectedLanguage,
                    messages: messagesPortuguese
                }
                dispatch(setLanguageAction(selectedLanguage, messagesPortuguese));
                localStorage.setItem('language', JSON.stringify(languagePT))
                updateLanguage(selectedLanguage);
                break;
            default:
                break;
        }
    }
    return ( 
        <div>
            <FormControl className={classes.formControl} >
            <InputLabel id="demo-simple-select-required-label">{messages.language_change}</InputLabel>
                <Select value={language} onChange={changeLanguage} >
                    <MenuItem value='es'>{messages.language_change_spanish}</MenuItem>
                    <MenuItem value='en'>{messages.language_change_english}</MenuItem>
                    <MenuItem value='pt'>{messages.language_change_portuguese}</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
 
export default Language;