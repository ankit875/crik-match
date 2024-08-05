import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// Dummy data for cricket matches
const matches = [
  {
    id: 1,
    name: "IPL 2024 - Match 1",
    teams: ["Mumbai Indians", "Chennai Super Kings"],
    players: {
      "Mumbai Indians": ["Rohit Sharma", "Jasprit Bumrah", "Kieron Pollard"],
      "Chennai Super Kings": ["MS Dhoni", "Ravindra Jadeja", "Faf du Plessis"]
    },
    venue: "Wankhede Stadium, Mumbai",
    date: "2024-03-29"
  },
  {
    id: 2,
    name: "World Cup 2023 - Final",
    teams: ["India", "Australia"],
    players: {
      "India": ["Virat Kohli", "Rohit Sharma", "Jasprit Bumrah"],
      "Australia": ["Steve Smith", "Pat Cummins", "David Warner"]
    },
    venue: "Narendra Modi Stadium, Ahmedabad",
    date: "2023-11-19"
  },
  {
    id: 3,
    name: "Ashes 2023 - 1st Test",
    teams: ["England", "Australia"],
    players: {
      "England": ["Joe Root", "Ben Stokes", "James Anderson"],
      "Australia": ["Pat Cummins", "Steve Smith", "Nathan Lyon"]
    },
    venue: "Edgbaston, Birmingham",
    date: "2023-06-16"
  },
  {
    id: 4,
    name: "T20 World Cup 2024 - Semi-Final",
    teams: ["New Zealand", "Pakistan"],
    players: {
      "New Zealand": ["Kane Williamson", "Trent Boult", "Tim Southee"],
      "Pakistan": ["Babar Azam", "Shaheen Afridi", "Mohammad Rizwan"]
    },
    venue: "Sydney Cricket Ground, Sydney",
    date: "2024-11-13"
  },
  {
    id: 5,
    name: "Asia Cup 2023 - Final",
    teams: ["India", "Sri Lanka"],
    players: {
      "India": ["Rohit Sharma", "Hardik Pandya", "Ravindra Jadeja"],
      "Sri Lanka": ["Dasun Shanaka", "Wanindu Hasaranga", "Kusal Mendis"]
    },
    venue: "R. Premadasa Stadium, Colombo",
    date: "2023-09-17"
  }
];

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
    const match_id = searchParams.get("match_id") || "";
  
  if (req.method === 'GET') {
    const matchId = parseInt(match_id as string, 10);
    const match = matches.find(m => m.id === matchId);

    if (match) {
      
     return Response.json(match);
    } else {
    return    Response.json({ message: 'Match not found' });
        // res.json({ message: 'Match not found' });
    //   res.status(404).json({ message: 'Match not found' });
    }
  } else {
    return Response.json({ message: 'Method Not Allowed' });
    // res.setHeader('Allow', ['GET']);
    // res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

