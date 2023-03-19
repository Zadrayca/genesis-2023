import {Grid, Link} from "@mui/material";

const Header = () => {

    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={{xs: 2, md: 2, lg: 2}}
              boxShadow="0 5px 10px rgba(0,0,0, 0.3)"
              marginBottom="24px"
        height="85px">
            <Grid item
                  display="flex"
                  justifyContent="center"
                  xs={10} sm={6} md={4} lg={3}>
                <Link href="/">
                    <img src="https://wisey.app/_next/static/chunks/ca7899a41e787107216b6d78cf4d37ba.svg" alt="logo"/>
                </Link>
            </Grid>
        </Grid>
    );
};

export {
    Header
};
