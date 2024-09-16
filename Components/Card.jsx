import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';


export default function Carddd({ movie }) {
  return (
    <Card className="w-full max-w-[48rem] flex-row rounded-sm">

      <CardBody>
        <Typography variant="h6" color="gray" className="uppercase">
          <NavLink to={`/detail-page/${movie.id}`}> {movie.id}</NavLink>
        </Typography>
        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.address.street}
        </Typography>


        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.address.suite}
        </Typography>


        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.address.city}
        </Typography>


        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.address.geo.lat}
        </Typography>


        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.address.geo.lng}
        </Typography>


        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.phone}
        </Typography>

        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.webiste}
        </Typography>
        <Typography variant="h6" color="gray" className=" uppercase">
          {movie.company.name}
        </Typography>

        <Typography variant="h6" color="gray" className="uppercase">
          {movie.company.catchPhrase}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {movie.company.bs}
        </Typography>

      </CardBody>
    </Card>
  )
}
