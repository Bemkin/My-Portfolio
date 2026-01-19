// Google Analytics event tracking utilities

declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string,
            config?: Record<string, any>
        ) => void;
    }
}

// Generic event tracking
export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', {
        button_name: buttonName,
        location: location || 'unknown',
    });
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent('form_submit', {
        form_name: formName,
        success: success,
    });
};

// Track project views
export const trackProjectView = (projectTitle: string, category: string) => {
    trackEvent('project_view', {
        project_title: projectTitle,
        project_category: category,
    });
};

// Track tab changes
export const trackTabChange = (tabName: string) => {
    trackEvent('tab_change', {
        tab_name: tabName,
    });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkType: string) => {
    trackEvent('external_link_click', {
        url: url,
        link_type: linkType,
    });
};
