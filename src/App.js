import { UXPinWrapper } from 'mui-uxpin';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  ButtonGroup,
  IconButton,
  Badge,
  Fab,
  // LoadingButton,
  // SplitButton,
  ToggleButton,
  ToggleButtonGroup,
  Checkbox,
  // CheckboxWithLabel,
  // CheckboxGroup,
  // Radio,
  // RadioWithLabel,
  // RadioGroup,
  Rating,
  // Select,
  Switch,
  // SwitchWithLabel,
  // SwitchGroup,
  // TextField,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  // Paper,
  // List,
  // ListItem,
  // ListItemAvatar,
  // ListItemButton,
  // ListItemIcon,
  // ListItemText,
  // ListSubheader,
  CircularProgress,
  LinearProgress,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  // Table,
  // TableCell,
  // TableContainer,
  // TableBody,
  // TableFooter,
  // TableHead,
  // TableRow,
  // AppBar,
  // BottomNavigation,
  // BottomNavigationAction,
  // Breadcrumbs,
  // Drawer,
  // Menu,
  // Link,
  // MenuList,
  // MenuItem,
  // Pagination,
  // Stepper,
  // Tab,
  // Tabs,
  Avatar,
  // AvatarGroup,
  Chip,
  Divider,
  Icon,
  // Tooltip,
  Typography,
  // FormControl,
  // FormControlLabel,
  // FormGroup,
  // FormHelperText,
  // FormLabel,
  Box,
  Container,
  Grid,
  // ImageList,
  // ImageListItem,
  // ImageListItemBar,
  Stack,
  // Alert,
  // AlertTitle,
  // Backdrop,
  // Collapse,
  // Image,
  // InputLabel,
  // Skeleton,
  // Slider,
  // Snackbar,
  // Toolbar,
} from '@mui/material';

function App() {
  return (
    <UXPinWrapper >
      <Container
        maxWidth="lg"
      >
        <div >

          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Accordion</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <Icon>
                    expand_more
                  </Icon>
                }
              >
                <Typography>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Button</h3>
            <Button
              color="primary"
              size="medium"
              variant="contained"
              startIcon={
                <Icon>
                  delete
                </Icon>
              }
            >
              Button
            </Button>
          </div>

          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>ButtonGroup</h3>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>
                One
              </Button>
              <Button
                startIcon={
                  <Icon>
                    home
                  </Icon>
                }
              >
                Two
              </Button>
              <Button>
                Three
              </Button>
            </ButtonGroup>
          </div>

          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>IconButton</h3>
            <IconButton>
              <Icon>
                history_toggle_off
              </Icon>
            </IconButton>
          </div>


          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Card</h3>
            <Card>
              <CardHeader
                color="grey"
                ariaLabel="add"
                title="Design Insights"
                subheader="December 6, 2021"
                avatar={
                  <Avatar>
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <Icon>
                      more_vert
                    </Icon>
                  </IconButton>
                }
              />
              <CardMedia
                component="img"
                height={140}
                image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Cool art"
              />
              <CardContent
                component="div"
              >
                <Typography
                  gutterBottom={true}
                  variant="h4"
                  component="div"
                >
                  Trends
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Learn about the recent top design trends and get inspired. See what you can experiment with in your future designs.
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                  >
                    Share
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </div>


          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Avatar</h3>
            <Avatar
              sx={{ bgcolor: 'green' }}
            >
              B
            </Avatar>
          </div>



          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Switch</h3>
            <Switch />
          </div>
          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Badge</h3>
            <Badge
              badgeContent="3"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              color="primary"
              overlap="circular"
            >
              <IconButton>
                <Icon>
                  notifications
                </Icon>
              </IconButton>
            </Badge>
          </div>

          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Chip</h3>
            <Chip
              label={
                <Icon
                  color="action"
                >
                  home
                </Icon>
              }
            ></Chip>
          </div>

          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>ToggleButton</h3>
            <ToggleButton
              value="home"
              selected={false}
            >
              <Icon>
                home
              </Icon>
            </ToggleButton>
          </div>

          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>ToggleButtonGroup</h3>
            <ToggleButtonGroup>
              <ToggleButton
                value="home"
              >
                <Icon>
                  home
                </Icon>
              </ToggleButton>
              <ToggleButton
                value="star"
              >
                <Icon>
                  star
                </Icon>
              </ToggleButton>
              <ToggleButton
                value="navigation"
              >
                <Icon>
                  navigation
                </Icon>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>



          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Stack</h3>

            <Stack
              direction="row"
              spacing={2}
              sx={{ padding: '0px 0px 0px 0px' }}
              divider={
                <Divider
                  orientation="vertical"
                  flexItem={true}
                />
              }
            >
              <Button
                variant="outlined"
              >
                Button 1
              </Button>
              <Button
                variant="outlined"
              >
                Button 2
              </Button>
              <Button
                variant="outlined"
              >
                Button 3
              </Button>
            </Stack>
          </div>
          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Checkbox</h3>
          <Checkbox />
          </div>
          <div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>CircularProgress</h3>
            <CircularProgress
  size={40}
/>
</div>
<div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>LinearProgress</h3>
            <LinearProgress
  variant="indeterminate"
  color="secondary"
/>
</div>


<div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Box</h3>
<Box
  width={300}
  height="200"
  bgcolor="grey.100"
  padding="10px"
  color="primary.main"
  textAlign="center"
>
  I'm a Box
</Box>
</div>
<div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Dialog</h3>
ADD DIALOG HERE

</div>


<div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Grid</h3>

<Grid
  container={true}
  spacing="8"
>
  <Grid
    item={true}
    xs={12}
    sm={6}
  >
    <Button
      size="medium"
      variant="outlined"
      color="primary"
      fullWidth={true}
    >
      Button
    </Button>
  </Grid>
  <Grid
    item={true}
    xs={12}
    sm={6}
  >
    <Button
      size="medium"
      variant="outlined"
      color="primary"
      fullWidth={true}
    >
      Button
    </Button>
  </Grid>
</Grid>

</div>
<div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>LoadingButton</h3>
<LoadingButton
  loading={true}
  variant="outlined"
  fullWidth={false}
  size="large"
>
  Loaded!
</LoadingButton>
</div>
<div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Fab</h3>
            <Fab
  color="primary"
  size="medium"
>
  <Icon>
    add
  </Icon>
</Fab>
</div>
<div style={{ border: "1px solid #eeeeee", padding: "20px", marginBottom: "10px" }}>
            <h3>Rating</h3>

<Rating
  max={4}
  value="3"
  emptyIcon={
    <Icon
      fontSize="inherit"
    >
      star
    </Icon>
  }
  icon={
    <Icon
      fontSize="inherit"
    >
      star_border
    </Icon>
  }
/>
</div>


</div>
      </Container>
    </UXPinWrapper>
  );
}

export default App;
