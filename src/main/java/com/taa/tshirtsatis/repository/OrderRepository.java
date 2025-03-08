package com.taa.tshirtsatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taa.tshirtsatis.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

}
