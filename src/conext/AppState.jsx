import { useState, useEffect, useReducer } from 'react';
import { AppContext } from '.';
import { getEntries } from '../storage/localStorage';
import { fetchEntries } from '../server';

