export const state = () => ({

  fontFamily: {
    config: {
      name: 'Font Family'
    },
    list: [
      {
        token: 'font-family-01',
        value: 'Roboto, sans-serif'
      }
    ]
  },

  fontSize: {
    config: {
      name: 'Font Size'
    },
    list: [
      {
        token: 'font-size-01',
        value: 62
      },
      {
        token: 'font-size-02',
        value: 48
      },
      {
        token: 'font-size-03',
        value: 32
      },
      {
        token: 'font-size-04',
        value: 24
      },
      {
        token: 'font-size-05',
        value: 16
      },
      {
        token: 'font-size-06',
        value: 14
      },
      {
        token: 'font-size-07',
        value: 12
      }
    ]
  },


  lineHeight: {
    config: {
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
  }
})

export const strict = false;
