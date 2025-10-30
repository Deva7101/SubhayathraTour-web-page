import { Box, Container, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import { Award, Shield, Clock, ThumbsUp, Heart, Users, MapPin, Star } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '10,000+', label: 'Happy Customers' },
  { icon: Shield, value: '100%', label: 'Safe Travel' },
  { icon: Clock, value: '24/7', label: 'Customer Support' }
];

const values = [
  {
    icon: Heart,
    title: 'Passion for Travel',
    description: 'We believe in creating journeys that touch hearts and inspire souls, making every trip a cherished memory.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Your safety and comfort are our top priorities. We maintain the highest standards in vehicle maintenance and driver training.'
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Every package is tailored to meet your unique needs. We listen, understand, and deliver experiences that exceed expectations.'
  },
  {
    icon: Star,
    title: 'Quality Service',
    description: 'From booking to drop-off, we ensure seamless service delivery with attention to every detail of your journey.'
  }
];



const About = () => {
  return (
        <Box sx={{ bgcolor: 'white', py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
                letterSpacing: 1
              }}
            >
              SUBHA YATHRA SERVICES
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: 'text.secondary',
                mb: 6
              }}
            >
              THE BEST SERVICES OUR COMPANY
            </Typography>
          </Box>

        ha Yathra Services - Together & Alongwith"
                  style={{
                    width: '100%',
                    height: 'auto',
                    disp  <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                  bgcolor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4
                }}
              >
                <img
                  src="/Subhatathra Corporate Logo (2).jpeg"
                  alt="Sublay: 'block',
                    maxWidth: '500px'
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: '#2a2a2a',
                  color: 'white',
                  p: 5,
                  borderRadius: 3,
                  borderLeft: '6px solid #ffc107',
                  position: 'relative'
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    color: '#ffc107'
                  }}
                >
                  The Company Head
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    mb: 3,
                    fontSize: '1rem'
                  }}
                >
                  Subha Yathra Services is an SSI registered in Chennai, Tamilnadu, India.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    mb: 3,
                    fontSize: '1rem'
                  }}
                >
                  Working with a network of well established hotels and resorts, tour centre and help desks
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    mb: 3,
                    fontSize: '1rem'
                  }}
                >
                  Poised to break all barriers of society to make them feel the heartbeats of this rich, varied & vibrant, cultural & religious, political and economic power house of the world.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    mb: 3,
                    fontSize: '1rem'
                  }}
                >
                  Slowly but surely, we have evolved THE BEST OF HOLIDAYS.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    fontSize: '1rem'
                  }}
                >
                  These and many more make SYS a class apart. We understand people better. Its Vacations Redefined! THOUGHTFULLY
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
