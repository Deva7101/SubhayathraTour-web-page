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

const milestones = [
  { year: '2009', event: 'Founded Subhayathra Services' },
  { year: '2012', event: 'Expanded fleet to 25+ vehicles' },
  { year: '2016', event: 'Reached 5,000 satisfied customers' },
  { year: '2020', event: 'Launched online booking platform' },
  { year: '2024', event: 'Celebrating 15 years of excellence' }
];

const About = () => {
  return (
    <Box id="about" sx={{ bgcolor: 'white' }}>
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
              }}
            >
              <img
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 3,
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 0 }}>
                  15+
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Years of Excellence
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: 2
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mt: 1,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Your Trusted Travel Partner
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.8,
                fontSize: '1.05rem'
              }}
            >
              For over 15 years, Subhayathra Services has been dedicated to creating meaningful and enriching travel experiences. We specialize in devotional tours, pilgrimage packages, and customized travel solutions across India.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.8,
                fontSize: '1.05rem'
              }}
            >
              Our mission is to provide top-quality travel services with love, care, and professionalism. From sacred pilgrimages to leisure tours, we ensure every journey is comfortable, safe, and memorable.
            </Typography>

            <Grid container spacing={3}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Grid item xs={6} sm={3} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        textAlign: 'center',
                        bgcolor: 'primary.light',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 1.5
                        }}
                      >
                        <IconComponent size={32} style={{ color: '#1976d2' }} />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          mb: 0.5
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: 2
              }}
            >
              OUR VALUES
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mt: 1,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              What Makes Us Different
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: 'primary.light',
                          mb: 3
                        }}
                      >
                        <IconComponent size={40} style={{ color: '#1976d2' }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: 2
            }}
          >
            OUR JOURNEY
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            15 Years of Excellence
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            From humble beginnings to becoming a trusted name in travel services, our journey has been marked by dedication, growth, and countless happy customers.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {milestones.map((milestone, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: index % 2 === 0 ? 'primary.main' : 'white',
                  color: index % 2 === 0 ? 'white' : 'text.primary',
                  borderRadius: 3,
                  border: index % 2 === 0 ? 'none' : '2px solid',
                  borderColor: 'primary.main',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 2
                  }}
                >
                  {milestone.year}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    lineHeight: 1.6
                  }}
                >
                  {milestone.event}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '1.75rem', md: '2rem' }
                }}
              >
                Ready to Start Your Journey?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.95,
                  lineHeight: 1.7,
                  fontSize: '1.05rem'
                }}
              >
                Let us help you create unforgettable memories. Contact us today to plan your next adventure with Subhayathra Services.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Box
                component="a"
                href="#contact"
                sx={{
                  display: 'inline-block',
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                  }
                }}
              >
                Get In Touch
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
