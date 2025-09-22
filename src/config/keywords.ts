// Base keywords structure for non-Phoenix cities
// This file provides the base KEYWORDS object that keywords.merge-phoenix.ts expects

export const KEYWORDS = {
  // Placeholder structures for other cities
  // These will be populated as we expand beyond the 5-city pilot
  mesa: {
    primary: [],
    emergency: [],
    service: [],
    local: [],
    problems: []
  },
  tempe: {
    primary: [],
    emergency: [],
    service: [],
    local: [],
    problems: []
  },
  chandler: {
    primary: [],
    emergency: [],
    service: [],
    local: [],
    problems: []
  },
  avondale: {
    primary: [],
    emergency: [],
    service: [],
    local: [],
    problems: []
  },
  // Additional cities to be added in future phases
  glendale: {
    primary: [],
    emergency: [],
    service: [],
    local: [],
    problems: []
  },
  scottsdale: {
    primary: [],
    emergency: [],
    service: [],
    local: [],
    problems: []
  }
};

// Type definition for keyword structure
export interface CityKeywords {
  primary: string[];
  emergency: string[];
  service: string[];
  local: string[];
  problems: string[];
}

export type KeywordsMap = Record<string, CityKeywords>;