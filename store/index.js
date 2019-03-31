export const state = () => ({

  fontFamily: {
    config: {
      status: true,
      name: 'Font Family'
    },
    list: [{
      token: 'font-family-01',
      value: 'Roboto, sans-serif'
    }]
  },

  fontSize: {
    config: {
      status: true,
      name: 'Font Size'
    },
    list: [{
        token: 'font-size-01',
        value: '62px'
      },
      {
        token: 'font-size-02',
        value: '48px'
      },
      {
        token: 'font-size-03',
        value: '32px'
      },
      {
        token: 'font-size-04',
        value: '24px'
      },
      {
        token: 'font-size-05',
        value: '16px'
      },
      {
        token: 'font-size-06',
        value: '14px'
      },
      {
        token: 'font-size-07',
        value: '12px'
      }
    ]
  },

  lineHeight: {
    config: {
      status: true,
      name: 'Line Height'
    },
    list: [{
        token: 'line-height-01',
        value: 1
      },
      {
        token: 'line-height-02',
        value: 1.5
      }
    ]
  },

  fontWeight: {
    config: {
      status: true,
      name: 'Font Weight'
    },
    list: [{
        token: 'font-weight-01',
        value: 'normal'
      },
      {
        token: 'font-weight-02',
        value: 'medium'
      },
      {
        token: 'font-weight-03',
        value: 'bold'
      }
    ]
  },

  letterSpacing: {
    config: {
      status: true,
      name: 'Letter Spacing'
    },
    list: [{
        token: 'letter-spacing-01',
        value: '-1'
      },
      {
        token: 'letter-spacing-02',
        value: '0'
      },
      {
        token: 'letter-spacing-03',
        value: '1'
      }
    ]
  },

  brandColors: {
    config: {
      status: true,
      name: 'Brand Colors'
    },
    list: [{
        token: 'color-primary',
        value: '#000'
      },
      {
        token: 'color-secundary',
        value: '#fff'
      },
    ]
  },

  mediaQuery: {
    config: {
      status: true,
      name: 'Media Query'
    },
    list: [{
        token: 'media-query-01',
        value: '576px'
      },
      {
        token: 'media-query-02',
        value: '768px'
      },
      {
        token: 'media-query-03',
        value: '992px'
      },
      {
        token: 'media-query-04',
        value: '1200px'
      }
    ]
  },

  sizes: {
    config: {
      status: true,
      name: 'Sizes'
    },
    list: [{
        token: 'size-01',
        value: '4px'
      },
      {
        token: 'size-01',
        value: '8px'
      },
      {
        token: 'size-01',
        value: '16px'
      },
      {
        token: 'size-01',
        value: '24px'
      },
      {
        token: 'size-01',
        value: '32px'
      },
      {
        token: 'size-01',
        value: '64px'
      },
    ]
  },

  boxShadow: {
    config: {
      status: true,
      name: 'Box Shadow'
    },
    list: [{
        token: 'box-shadow-01',
        value: '4px 0 8px 0 rgba(0,0,0,.16)'
      },
      {
        token: 'box-shadow-02',
        value: '8px 0 16px 0 rgba(0,0,0,.16)'
      },
      {
        token: 'box-shadow-03',
        value: '16px 0 24px 0 rgba(0,0,0,.16)'
      },
    ]
  },

  borderWidth: {
    config: {
      status: true,
      name: 'Border Width'
    },
    list: [{
        token: 'border-01',
        value: '1px'
      },
      {
        token: 'border-02',
        value: '2px'
      },
      {
        token: 'border-03',
        value: '4px'
      },
    ]
  },

  borderRadius: {
    config: {
      status: true,
      name: 'Border Radius'
    },
    list: [{
        token: 'border-radius-01',
        value: '4px'
      },
      {
        token: 'border-radius-02',
        value: '50%'
      },
      {
        token: 'border-radius-03',
        value: '500px'
      },
    ]
  },

  iconSize: {
    config: {
      status: false,
      name: 'Icon Size'
    },
    list: [{
        token: 'icon-size-01',
        value: '16px'
      },
      {
        token: 'icon-size-02',
        value: '24px'
      },
      {
        token: 'icon-size-03',
        value: '46px'
      },
    ]
  },

  opacity: {
    config: {
      status: false,
      name: 'Opacity'
    },
    list: [{
        token: 'opacity-01',
        value: '.1'
      },
      {
        token: 'opacity-02',
        value: '.4'
      },
      {
        token: 'opacity-03',
        value: '.6'
      },
      {
        token: 'opacity-04',
        value: '.8'
      },
    ]
  }
})

export const strict = false;
