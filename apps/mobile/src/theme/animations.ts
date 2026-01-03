// Animation timing constants
export const animations = {
    // Duration
    duration: {
        instant: 0,
        fast: 150,
        normal: 250,
        slow: 350,
        verySlow: 500,
    },

    // Easing functions
    easing: {
        linear: 'linear',
        easeIn: 'ease-in',
        easeOut: 'ease-out',
        easeInOut: 'ease-in-out',
        spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    // Common animation configs
    fadeIn: {
        duration: 250,
        useNativeDriver: true,
    },

    fadeOut: {
        duration: 200,
        useNativeDriver: true,
    },

    slideIn: {
        duration: 300,
        useNativeDriver: true,
    },

    slideOut: {
        duration: 250,
        useNativeDriver: true,
    },

    scale: {
        duration: 200,
        useNativeDriver: true,
    },

    scalePress: {
        scaleDown: 0.96,
        duration: 100,
        useNativeDriver: true,
    },

    spring: {
        tension: 40,
        friction: 7,
        useNativeDriver: true,
    },
};

// Transition presets
export const transitions = {
    dropdown: {
        open: {
            duration: animations.duration.normal,
            easing: animations.easing.easeOut,
        },
        close: {
            duration: animations.duration.fast,
            easing: animations.easing.easeIn,
        },
    },

    modal: {
        open: {
            duration: animations.duration.slow,
            easing: animations.easing.spring,
        },
        close: {
            duration: animations.duration.normal,
            easing: animations.easing.easeInOut,
        },
    },

    button: {
        press: {
            duration: animations.duration.fast,
            easing: animations.easing.easeInOut,
        },
    },

    toggle: {
        switch: {
            duration: animations.duration.normal,
            easing: animations.easing.easeInOut,
        },
    },
};
