import { Box, Container, Typography, Card, CardMedia } from '@mui/material';
import logo from '../assets/SubhatathraCorporateLogo.jpeg';
const AboutPage = () => {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: 'primary.main',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Subha Yathra Services
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontWeight: 600,
            }}
          >
            The Best Services Our Company
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#1976d2',
              mb: 4,
              fontWeight: 600,
              fontStyle: 'italic'
            }}
          >
            The Company Head
          </Typography>

          <Card
            elevation={6}
            sx={{
              width: 300,
              height: 300,
              borderRadius: 3,
              mx: 'auto',
              mb: 6,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              image={logo}
              alt="Subha Yathra Services Logo"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Card>

          <Box
            sx={{
              position: 'relative',
              color: '#333',
              maxWidth: 900,
              mx: 'auto',
              lineHeight: 1.9,
              fontSize: '1.08rem',
              textAlign: 'justify',
              background: 'linear-gradient(135deg, #dfebfa 0%, #618cf0 100%)',
              p: '40px 45px',
              borderRadius: '18px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
              fontFamily: "'Poppins', sans-serif",
              transition: 'all 0.4s ease',
              animation: 'fadeIn 1.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 14px 30px rgba(0, 0, 0, 0.15)',
                border: '2px solid #1976d2',
              },
            }}
          >
            <Typography variant="body1" component="div">
              <strong style={{ color: '#1976d2', fontSize: '1.3rem' }}>
                Subha Yathra Services
              </strong>{' '}
              is an SSI registered in{' '}
              <strong style={{ color: '#1565c0' }}>
                Chennai, Tamilnadu, India.
              </strong>
              <br />
              <br />
              Working with a network of well established hotels and resorts, tour centre and help desks.
              <br />
              <br />
              Poised to break all barriers of society to make them feel the heartbeats of this rich, varied & vibrant, cultural & religious, political and economic power house of the world.
              <br />
              <br />
              Slowly but surely, we have evolved THE BEST OF HOLIDAYS.
              <br />
              <br />
              These and many more make SYS a class apart. We understand people better. Its Vacations Redefined!
              <br />
              <br />
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#555',
                  fontStyle: 'italic',
                  display: 'block',
                  mt: 1,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                THOUGHTFULLY
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
