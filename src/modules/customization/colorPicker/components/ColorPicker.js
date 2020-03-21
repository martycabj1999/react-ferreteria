import React, { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Dialog, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { MaterialPicker, ChromePicker } from 'react-color';


//Action de redux 
import { setColorsAction } from '../store/ColorPickerActions';


const ColorPicker = () => {

    const useStyles = makeStyles(theme => ({
        control: {
            padding: theme.spacing(2),
        },
        text: {
            minWidth: 55,
            maxWidth: 65,
        },
        root: {
            minWidth: 200,
            maxWidth: 700,
        },
    }));    

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    const currentColors = useSelector(state => state.customization.colors);

    const classes = useStyles();
    //state del componente
    const [ colorPrimary, setColorPrimary ] = useState(currentColors.colorPrimary);
    const [ colorSecondary, setColorSecondary ] = useState(currentColors.colorSecondary);
    const [ textPrimary, setTextPrimary ] = useState(currentColors.textPrimary);
    const [ textSecondary, setTextSecondary ] = useState(currentColors.textSecondary);
    
    //State de Show
    const [ showColorPrimary, setShowColorPrimary ] = useState(false);
    const [ showColorSecondary, setShowColorSecondary ] = useState(false);
    const [ showTextPrimary, setShowTextPrimary ] = useState(false);
    const [ showTextSecondary , setShowTextSecondary ] = useState(false);

    const onChangeColorPrimary = (color) => {
            setColorPrimary(color);
    }

    const onChangeColorSecondary = (color) => {
            setColorSecondary(color);
    }

    const onChangeTextPrimary = (color) => {
            setTextPrimary(color);
    }

    const onChangeTextSecondary = (color) => {
            setTextSecondary(color);
    }

    const openColorPrimary = () => {
        setShowColorPrimary(!showColorPrimary);
    }

    const openColorSecondary = () => {
        setShowColorSecondary(!showColorSecondary);
    }

    const openTextPrimary = () => {
        setShowTextPrimary(!showTextPrimary);
    }

    const openTextSecondary = () => {
        setShowTextSecondary(!showTextSecondary);
    }

    const onClick = () => {
        const colorPicker = {
            colorPrimary,
            colorSecondary,
            textPrimary,
            textSecondary
        }
        
        // Mando colors al local storage y a redux
        localStorage.setItem('colors', JSON.stringify(colorPicker))
        dispatch(setColorsAction(colorPicker));
    }

    return ( 
        <Grid className={classes.control} container justify="center" spacing={2} item xs={12} lg={12}>
            <Grid className={classes.control} item xs={5} lg={5}>
                <Card variant="outlined" className={classes.root}>
                    <CardContent>
                        <Grid className={classes.control} item xs={10} lg={10}>
                            <Grid container justify="center" spacing={4}>
                                <Grid className={classes.text} xs={2} lg={2} >
                                    <br/><br/><br/>
                                    <span>color_primary</span>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <div style={{
                                        backgroundColor: colorPrimary,
                                        height: 130,
                                        width: 130,
                                        transition: 'ease all 500ms'
                                    }}>
                                    </div>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <MaterialPicker 
                                        color={colorPrimary} 
                                        onChangeComplete={(colorPrimary) => {onChangeColorPrimary(colorPrimary.hex)}} 
                                    />
                                </Grid>
                                <Grid xs={2} lg={2} item>
                                    <br/><br/><br/>
                                    <Button variant="contained" color="primary" onClick={openColorPrimary} >Cambiar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <br/>
                <Card variant="outlined" className={classes.root}>
                    <CardContent>
                        <Grid className={classes.control} item xs={10} lg={10}>
                            <Grid container justify="center" spacing={5}>
                                <Grid className={classes.text} xs={2} lg={2} >
                                    <br/><br/><br/>
                                    <span>color_secondary</span>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <div style={{
                                        backgroundColor: colorSecondary,
                                        height: 130,
                                        width: 130,
                                        transition: 'ease all 500ms'
                                    }}>
                                    </div>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <MaterialPicker 
                                        color={colorSecondary} 
                                        onChangeComplete={(colorSecondary) => {onChangeColorSecondary(colorSecondary.hex)}} 
                                    />
                                </Grid>
                                <Grid xs={2} lg={2} item>
                                    <br/><br/><br/>
                                    <Button variant="contained" color="primary" onClick={openColorSecondary} >Cambiar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid className={classes.control} item xs={5} lg={5}>
                <Card variant="outlined" className={classes.root}>
                    <CardContent>
                        <Grid className={classes.control} item xs={10} lg={10}>
                            <Grid container justify="center" spacing={4}>
                                <Grid className={classes.text} xs={2} lg={2} >
                                    <br/><br/><br/>
                                    <span>text_primary</span>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <div style={{
                                        backgroundColor: textPrimary,
                                        height: 130,
                                        width: 130,
                                        transition: 'ease all 500ms'
                                    }}>
                                    </div>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <MaterialPicker 
                                        color={textPrimary} 
                                        onChangeComplete={(textPrimary) => {onChangeTextPrimary(textPrimary.hex)}} 
                                    />
                                </Grid>
                                <Grid xs={2} lg={2} item>
                                    <br/><br/><br/>
                                    <Button variant="contained" color="primary" onClick={openTextPrimary} >Cambiar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <br/>
                <Card variant="outlined" className={classes.root}>
                    <CardContent>
                        <Grid className={classes.control} item xs={10} lg={10} >
                            <Grid container justify="center" spacing={4}>
                                <Grid className={classes.text} xs={2} lg={2} >
                                    <br/><br/><br/>
                                    <span>text_secondary</span>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <div style={{
                                        backgroundColor: textSecondary,
                                        height: 130,
                                        width: 130,
                                        transition: 'ease all 500ms'
                                    }}>
                                    </div>
                                </Grid>
                                <Grid xs={4} lg={4} item>
                                    <MaterialPicker 
                                        color={textSecondary} 
                                        onChangeComplete={(textSecondary) => {onChangeTextSecondary(textSecondary.hex)}} 
                                    />
                                </Grid>
                                <Grid xs={2} lg={2} item>
                                    <br/><br/><br/>
                                    <Button variant="contained" color="primary" onClick={openTextSecondary} >Cambiar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Dialog open={showColorPrimary} onClose={openColorPrimary} aria-labelledby="form-dialog-title">
                <ChromePicker 
                    color={colorPrimary} 
                    onChangeComplete={(colorPrimary) => {onChangeColorPrimary(colorPrimary.hex)}} 
                />
            </Dialog>            
            <Dialog open={showColorSecondary} onClose={openColorSecondary} aria-labelledby="form-dialog-title">
                <ChromePicker 
                    color={colorSecondary} 
                    onChangeComplete={(colorSecondary) => {onChangeColorSecondary(colorSecondary.hex)}} 
                />
            </Dialog>            
            <Dialog open={showTextPrimary} onClose={openTextPrimary} aria-labelledby="form-dialog-title">
                <ChromePicker 
                    color={textPrimary} 
                    onChangeComplete={(textPrimary) => {onChangeTextPrimary(textPrimary.hex)}} 
                />
            </Dialog>            
            <Dialog open={showTextSecondary} onClose={openTextSecondary} aria-labelledby="form-dialog-title">
                <ChromePicker 
                    color={textSecondary} 
                    onChangeComplete={(textSecondary) => {onChangeTextSecondary(textSecondary.hex)}} 
                />
            </Dialog>            
  
            <Grid className={classes.control} item xs={5} lg={6}>
                <Button startIcon={<SaveIcon />} align="center" variant="contained" onClick={onClick} color="primary">
                    Guardar configuración
                </Button>
            </Grid>
        </Grid>
    );
}
 
export default ColorPicker;