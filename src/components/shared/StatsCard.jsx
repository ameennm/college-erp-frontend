import { Card, CardContent, Typography, Box } from '@mui/material';

const gradientMap = {
  '#6366F1': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  '#10B981': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
  '#EF4444': 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
  '#F59E0B': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
  '#3B82F6': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
  // Legacy color support
  '#4A90E2': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  '#50C878': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
  '#FF6B6B': 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
  '#FFA500': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
};

export default function StatsCard({ title, value, icon, color = '#6366F1', subtitle }) {
  const gradient = gradientMap[color] || `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`;

  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        background: '#FFFFFF',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)'
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: gradient
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box flex={1}>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                mb: 1.5
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 0.5,
                fontSize: { xs: '1.75rem', sm: '2rem' }
              }}
            >
              {value}
            </Typography>
            {subtitle && (
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.8rem'
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '16px',
              background: gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 8px 16px ${color}40`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'rotate(5deg) scale(1.05)'
              }
            }}
          >
            <Box sx={{
              fontSize: 32,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {icon}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
