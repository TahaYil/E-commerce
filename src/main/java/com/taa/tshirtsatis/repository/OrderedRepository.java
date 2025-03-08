package com.taa.tshirtsatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taa.tshirtsatis.entity.Ordered;

@Repository
public interface OrderedRepository extends JpaRepository<Ordered, Integer> {

}
