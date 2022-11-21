import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  CardHeader,
  FormControlLabel,
  Button,
  Checkbox,
  FormGroup,
  TextField,
  Typography,
  Grid,
  CardContent,
} from "@mui/material";
import Link from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { AppRegistrationRounded } from "@mui/icons-material";
import { borderRadius, flexbox } from "@mui/system";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { blue, yellow } from "@mui/material/colors";

interface Values {
  username: string;
  password: string;
  TextField: string;
  MyCheckbox: boolean;
  requires: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Grid
        sx={{
          backgroundColor: "#e6f3ff",
          width: "350px",
          display: "flex",
          marginTop: "150px",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div>
              <Typography variant="h4">Login</Typography>
              <TextField
                {...register("Username")}
                required
                name="username"
                label="Username"
                id="standard-required"
                placeholder="Username"
                variant="standard"
                size="small"
                helperText="username"
              />
              <div></div>

              <TextField
                {...register("Password")}
                required
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                helperText="password"
                variant="standard"
                size="small"
              />
            </div>
            <Button
              variant="contained"
              onClick={() => {
                alert("clicked");
              }}
              type="submit"
              className="submit"
            >
              Login
            </Button>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Keep me logged in"
              />
            </FormGroup>
          </form>
        </CardContent>
      </Grid>
    </div>
  );
}
